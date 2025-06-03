# DateUtil

A TypeScript utility library for date manipulation, formatting, and calculations.

## Overview

DateUtil provides a comprehensive set of static methods for working with dates in JavaScript/TypeScript applications. It simplifies common date operations like formatting, parsing, adding time intervals, and calculating differences between dates.

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/dateutil.git

# Navigate to the project directory
cd dateutil

# Install dependencies (if using npm)
npm install
```

## Usage

Import the DateUtil class:

```typescript
import DateUtil from './src/DateUtil';
```

### Date Formatting

```typescript
// Format the current date as YYYY-MM-DD
const formattedDate = DateUtil.formatDate(new Date(), 'YYYY-MM-DD');
// Result: "2024-03-10" (current date in YYYY-MM-DD format)
```

### Date Parsing

```typescript
// Parse a date string into a Date object
const parsedDate = DateUtil.parseDate('2024-03-10', 'YYYY-MM-DD');
// Result: Date object representing March 10, 2024

// Parse with a different format
const anotherDate = DateUtil.parseDate('10-03-2024', 'DD-MM-YYYY');
// Result: Date object representing March 10, 2024
```

### Date Manipulation

```typescript
// Add time intervals to a date
const tomorrow = DateUtil.addTime(new Date(), 1, 'day');
const nextWeek = DateUtil.addTime(new Date(), 1, 'week');
const nextMonth = DateUtil.addTime(new Date(), 1, 'month');
const nextYear = DateUtil.addTime(new Date(), 1, 'year');
```

### Date Comparisons

```typescript
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-02-01');

// Check if one date is after another
const isAfter = DateUtil.isAfter(date2, date1); // true

// Check if one date is before another
const isBefore = DateUtil.isBefore(date1, date2); // true

// Check if two dates represent the same day
const isSameDay = DateUtil.isSameDay(new Date('2024-01-01T10:00:00'), new Date('2024-01-01T15:30:00')); // true
```

### Date Differences

```typescript
const start = new Date('2024-01-01');
const end = new Date('2024-01-31');

// Calculate differences between dates in various units
const daysBetween = DateUtil.getDateDiff(start, end, 'days'); // 30
const weeksBetween = DateUtil.getDateDiff(start, end, 'weeks'); // ~4
const monthsBetween = DateUtil.getDateDiff(start, end, 'months'); // 0
const yearsBetween = DateUtil.getDateDiff(start, end, 'years'); // 0
```

## API Reference

### Formatting and Parsing

-   **`formatDate(date: Date, format: string): string`**  
    Formats a Date object according to the specified format.

-   **`parseDate(dateString: string, format: string): Date | null`**  
    Parses a date string according to the specified format.

### Date Manipulation

-   **`addTime(date: Date, amount: number, unit: 'day' | 'week' | 'month' | 'year'): Date`**  
    Returns a new Date with the specified time amount added.

### Date Comparison

-   **`isAfter(date1: Date, date2: Date): boolean`**  
    Returns true if date1 is after date2.

-   **`isBefore(date1: Date, date2: Date): boolean`**  
    Returns true if date1 is before date2.

-   **`isSameDay(date1: Date, date2: Date): boolean`**  
    Returns true if date1 and date2 represent the same day.

### Date Calculations

-   **`getDateDiff(date1: Date, date2: Date, unit: 'days' | 'weeks' | 'months' | 'years'): number`**  
    Calculates the difference between two dates in the specified unit.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
