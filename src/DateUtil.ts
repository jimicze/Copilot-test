/* 
## Úroveň 1: Základní operace s datumy

Jako vývojář potřebuji provádět základní formátování a parsování (zpracování) datumů, abych mohl standardizovat práci s datumy napříč naší aplikací.

### Poznámky k implementaci:

- Vytvořte třídu DateUtil
- Implementujte funkcionalitu formátování datumů
- Přidejte možnosti parsování datumů
- Podpora běžných vzorů formátu datumu
- Zvažte ošetření chyb pro neplatné vstupy

### Očekávané chování:
// Příklad použití, kterého chceme dosáhnout
const formattedDate = DateUtil.formatDate(new Date(), 'YYYY-MM-DD');
const parsedDate = DateUtil.parseDate('2024-03-10', 'YYYY-MM-DD'); 

*/
// druhy krok byl ciste pres copilot Chat a Edit mode
/*
"Jako byznys analytik potřebuji provádět výpočty s datumy pro generování reportů napříč různými časovými obdobími."

Poznámky k implementaci:
Přidejte metody pro aritmetické operace s datumy
Implementujte funkcionalitu pro porovnávání datumů
Zpracování převodů časových jednotek
Zvažte hraniční případy jako přechody mezi měsíci
Ukázkové scénáře:
// Přidávání časových intervalů
const futureDate = DateUtil.addTime(new Date(), 2, 'month');
// Výpočet rozdílů mezi datumy
const daysBetween = DateUtil.getDateDiff(date1, date2, 'days');

*/

// 3ti krok byl copilot chat edit mode : add some static html code web page example to test DateUtil

// vysledek:

class DateUtil {
	static formatDate(date: Date, format: string): string {
		const options: Intl.DateTimeFormatOptions = {};

		if (format.includes('YYYY')) {
			options.year = 'numeric';
		}
		if (format.includes('MM')) {
			options.month = '2-digit';
		}
		if (format.includes('DD')) {
			options.day = '2-digit';
		}

		return new Intl.DateTimeFormat('en-US', options).format(date);
	}

	static parseDate(dateString: string, format: string): Date | null {
		const parts = dateString.split(/[-/]/);
		let year: number | null = null;
		let month: number | null = null;
		let day: number | null = null;

		if (format === 'YYYY-MM-DD') {
			year = parseInt(parts[0], 10);
			month = parseInt(parts[1], 10) - 1; // Měsíce jsou indexovány od 0
			day = parseInt(parts[2], 10);
		} else if (format === 'DD-MM-YYYY') {
			day = parseInt(parts[0], 10);
			month = parseInt(parts[1], 10) - 1;
			year = parseInt(parts[2], 10);
		} else {
			throw new Error('Unsupported date format');
		}

		if (year && month !== null && day) {
			return new Date(year, month, day);
		}

		return null;
	}

	static addTime(date: Date, amount: number, unit: 'day' | 'week' | 'month' | 'year'): Date {
		const result = new Date(date);

		switch (unit) {
			case 'day':
				result.setDate(result.getDate() + amount);
				break;
			case 'week':
				result.setDate(result.getDate() + amount * 7);
				break;
			case 'month':
				result.setMonth(result.getMonth() + amount);
				break;
			case 'year':
				result.setFullYear(result.getFullYear() + amount);
				break;
			default:
				throw new Error('Unsupported time unit');
		}

		return result;
	}

	static getDateDiff(date1: Date, date2: Date, unit: 'days' | 'weeks' | 'months' | 'years'): number {
		const timeDiff = Math.abs(date2.getTime() - date1.getTime());

		switch (unit) {
			case 'days':
				return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
			case 'weeks':
				return Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
			case 'months':
				const yearDiff = date2.getFullYear() - date1.getFullYear();
				const monthDiff = date2.getMonth() - date1.getMonth();
				return Math.abs(yearDiff * 12 + monthDiff);
			case 'years':
				return Math.abs(date2.getFullYear() - date1.getFullYear());
			default:
				throw new Error('Unsupported time unit');
		}
	}

	static isAfter(date1: Date, date2: Date): boolean {
		return date1.getTime() > date2.getTime();
	}

	static isBefore(date1: Date, date2: Date): boolean {
		return date1.getTime() < date2.getTime();
	}

	static isSameDay(date1: Date, date2: Date): boolean {
		return (
			date1.getFullYear() === date2.getFullYear() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getDate() === date2.getDate()
		);
	}
}
// Příklad použití
const formattedDate = DateUtil.formatDate(new Date(), 'YYYY-MM-DD');
const parsedDate = DateUtil.parseDate('2024-03-10', 'YYYY-MM-DD');
const futureDate = DateUtil.addTime(new Date(), 2, 'month');
const daysBetween = DateUtil.getDateDiff(new Date('2024-01-01'), new Date('2024-01-31'), 'days');
console.log(formattedDate); // Např. "2024-03-10"
console.log(parsedDate); // Date object pro 10. března 2024
console.log(futureDate); // Date object 2 měsíce v budoucnu
console.log(daysBetween); // 30

export default DateUtil;
