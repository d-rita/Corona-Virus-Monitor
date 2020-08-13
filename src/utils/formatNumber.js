import numeral from 'numeral';

export const formatNumber = (num) => {
    let finalValue = numeral(num).format('0,0');
    return finalValue;
}
