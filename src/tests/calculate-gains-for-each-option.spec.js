import { calculateGainsForEachOption } from '../utilities';

function specificExampleIsValid(data) {
	return (
		data.get(100).join(',') === '-14,11,-13' &&
		data.get(102.5).join(',') === '-9.54,13.5,-15.5' &&
		data.get(103).join(',') === '-9.04,-13.5,-16' &&
		data.get(105).join(',') === '-7.039999999999999,-11.5,-14'
	)
}

describe('calculateGainsForEachOption', () => {

	test('accounts for null', () => {
		const value = calculateGainsForEachOption(null);
		const expectation = value instanceof Map && value.size === 0;
		expect(expectation).toEqual(true);
	})

	test('accounts for undefined', () => {
		const value = calculateGainsForEachOption(undefined);
		const expectation = value instanceof Map && value.size === 0;
		expect(expectation).toEqual(true);
	})

	test('specific example of calculated values', () => {
		const data = [
			{
				"strike_price": 100, 
				"type": "Call", 
				"bid": 10.05, 
				"ask": 12.04, 
				"long_short": "long", 
				"expiration_date": "2025-12-17T00:00:00Z"
			},
			{
				"strike_price": 102.50, 
				"type": "Call", 
				"bid": 12.10, 
				"ask": 14, 
				"long_short": "long", 
				"expiration_date": "2025-12-17T00:00:00Z"
			},
			{
				"strike_price": 103, 
				"type": "Put", 
				"bid": 14, 
				"ask": 15.50, 
				"long_short": "short", 
				"expiration_date": "2025-12-17T00:00:00Z"
			},
			{
				"strike_price": 105, 
				"type": "Put", 
				"bid": 16, 
				"ask": 18, 
				"long_short": "long", 
				"expiration_date": "2025-12-17T00:00:00Z"
			}
		];
		const value = calculateGainsForEachOption(data);
		const expectation = specificExampleIsValid(value) === true;
		expect(expectation).toEqual(true);
	})

})
