export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  // Honeypot check — bots fill this field
  const honeypot = data.get('website');
  if (honeypot) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  const name = String(data.get('name') ?? '').trim();
  const company = String(data.get('company') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const phone = String(data.get('phone') ?? '').trim();
  const service = String(data.get('service') ?? '').trim();
  const message = String(data.get('message') ?? '').trim();

  // Server-side validation
  if (!name || !email || !service || !message) {
    return new Response(JSON.stringify({ error: 'Campos requeridos faltantes.' }), { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: 'Email inválido.' }), { status: 400 });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY no configurada');
    return new Response(JSON.stringify({ error: 'Configuración de servidor incompleta.' }), { status: 500 });
  }

  const resend = new Resend(apiKey);
  const contactEmail = import.meta.env.CONTACT_EMAIL || 'contacto@censa.com.mx';

  try {
    await resend.emails.send({
      from: 'CENSA Web <noreply@censa.com.mx>',
      to: [contactEmail],
      replyTo: email,
      subject: `Nueva cotización: ${service} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <div style="background: #E10600; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 22px; letter-spacing: 2px;">CENSA — NUEVA COTIZACIÓN</h1>
          </div>
          <div style="padding: 32px; background: #F3EFEA;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6D6D6D; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Nombre</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
              ${company ? `<tr><td style="padding: 8px 0; color: #6D6D6D; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Empresa</td><td style="padding: 8px 0; font-weight: 600;">${company}</td></tr>` : ''}
              <tr><td style="padding: 8px 0; color: #6D6D6D; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #E10600;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #6D6D6D; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Teléfono</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #E10600;">${phone}</a></td></tr>` : ''}
              <tr><td style="padding: 8px 0; color: #6D6D6D; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Servicio</td><td style="padding: 8px 0; font-weight: 600; color: #E10600;">${service}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border-left: 4px solid #E10600;">
              <p style="margin: 0; font-size: 13px; color: #6D6D6D; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Descripción del proyecto</p>
              <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #111; color: #6D6D6D; font-size: 11px; text-align: center;">
            Enviado desde el formulario de contacto en censa.com.mx
          </div>
        </div>
      `,
    });

    // Auto-reply to the sender
    await resend.emails.send({
      from: 'CENSA <noreply@censa.com.mx>',
      to: [email],
      subject: 'Recibimos tu solicitud — CENSA',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <div style="background: #E10600; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 22px; letter-spacing: 2px;">CENSA</h1>
          </div>
          <div style="padding: 32px; background: #F3EFEA;">
            <p>Hola <strong>${name}</strong>,</p>
            <p>Recibimos tu solicitud de cotización para <strong>${service}</strong>. Nuestro equipo técnico la revisará y te contactará en menos de <strong>48 horas hábiles</strong>.</p>
            <p>Para emergencias, llámanos directamente: <a href="tel:+528100000000" style="color: #E10600; font-weight: 600;">+52 81 0000-0000</a> (24/7)</p>
            <p style="margin-top: 24px;">Gracias por confiar en CENSA.<br><strong>El equipo CENSA</strong></p>
          </div>
          <div style="padding: 16px 32px; background: #111; color: #6D6D6D; font-size: 11px; text-align: center;">
            CENSA — Infraestructura Eléctrica de Media Tensión · Monterrey, Nuevo León
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Error Resend:', err);
    return new Response(JSON.stringify({ error: 'Error al enviar el mensaje.' }), { status: 500 });
  }
};
