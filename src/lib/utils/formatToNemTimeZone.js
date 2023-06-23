import { formatInTimeZone } from 'date-fns-tz';

/**
 * @param {Date} date
 */
export default function (date) {
	// Queensland is +10 and has no daylight savings
	return formatInTimeZone(date, 'Australia/Queensland', 'yyyy-MM-dd HH:mm:ss zzz');
}
