import PropTypes from 'prop-types';

export const ButtonPropTypes = {
  text: PropTypes.string.isRequired,
  widthflex: PropTypes.string.isRequired,
};

export const RegistroTypePropTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  day: PropTypes.string,
  accountNumber: PropTypes.number,
  originAccountNumber: PropTypes.number,
  recipientAccountNumber: PropTypes.number,
  value: PropTypes.number,
  category: PropTypes.string,
  type: PropTypes.string,
};

export const RegistroRowPropTypes = {
  data: PropTypes.string.isRequired,
  semana: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
  tipo: PropTypes.string.isRequired,
};

export const LeftTopPropTypes = {
  filtros: PropTypes.arrayOf(PropTypes.string).isRequired,
  keyWordFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
  setkeyWordFilter: PropTypes.func.isRequired,
  alterEstadoDeFiltro: PropTypes.func.isRequired,
};

export const LeftBottomPropTypes = {
  registros: PropTypes.arrayOf(PropTypes.shape(RegistroTypePropTypes)).isRequired,
  keyWordFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const RightPropTypes = {
  exibirSomaDosDepositos: PropTypes.func.isRequired,
  exibirSomaDosSaques: PropTypes.func.isRequired,
  setDepositoModal: PropTypes.func.isRequired,
};
