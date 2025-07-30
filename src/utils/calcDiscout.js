export function calcAfterDicount({priceAfterDiscount , price}) {
    const discount = (1-(priceAfterDiscount/price))*100;
    return Math.round(discount)
}