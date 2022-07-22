interface String {
	/**
	 *Initial path of web sources
	 */
	toInitialWebPath(): string;
};

interface Date{

/**
		* Returns a string representation of a date. The format of the string depends on the parameter.
		* @param frm yyyy/MM/dd HH:mm:ss.f
		*/
 formatDate(frm: 'yyyy-MM-dd HH:mm:ss.f' | 'yyyy/MM/dd HH:mm:ss.f' | 'yyyyMMddHHmmssf' | 'yyyy年MM月dd日 HH时mm分ss秒f毫秒'): string
}