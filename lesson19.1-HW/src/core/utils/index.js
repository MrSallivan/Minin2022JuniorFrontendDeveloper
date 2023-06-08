import moment from "moment"

export const calculateSumOfNumbers = (arrNums) => {
	return arrNums.reduce((acc, item) => acc + item, 0)
}
export const getFormattedTime = (date) => {
	return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}