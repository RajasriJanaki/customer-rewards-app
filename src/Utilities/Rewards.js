/**
 * 
 * @param {decimal} amount Transaction amount
 * @returns Reward points earned
 */
export function findRewards(amount) {
    
    let points = (amount > 50) ? (amount - 50) : 0;
    points += (amount > 100) ? (amount - 100) : 0;

    return points.toFixed(2);
}