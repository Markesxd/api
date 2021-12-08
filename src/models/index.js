const Atendimento = require('./atendimentos');
const Exame = require('./exames');
const Gerente = require('./gerentes');
const InfoSaude = require('./infosaude');
const Medicamento = require('./medicamentos');
const Medico = require('./medicos');
const Paciente = require('./pacientes');
const Prontuario = require('./prontuarios');

//A ordem dos modelos é essa para não dar erro de chave estrangeira
module.exports = {
  Paciente,
  Prontuario,
  Medico,
  Atendimento,
  Exame,
  Gerente,
  InfoSaude,
  Medicamento,
}