const moment = require('moment');
const db = require('../../models');

async function create(maintenance) {
  if (!maintenance.fecha_solicitud) throw new Error("La fecha de solicitud es requerida");
  if (!maintenance.comentarios) throw new Error("Los comentarios son obligatorios");
  if (!maintenance.id_technician) throw new Error("El id del técnico es obligatorio");

  const formattedDate = moment(maintenance.fecha_solicitud, 'DD/MM/YYYY HH:mm').toDate();

  return await db.maintenance.create({
    fecha_solicitud: formattedDate,
    comentarios: maintenance.comentarios,
    id_technician: maintenance.id_technician,
  });
}

module.exports = {
  create,
}
