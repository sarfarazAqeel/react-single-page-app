const hasNumbers = value =>{
return new RegExp(/[0-9]/).test(value)
}
const hasSpecial = value =>{
	return (/[!@#$%^&*)(+=._-]/.test(value))

}
const hasMixed =  value =>{
	return  new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value)

}
export const  strengthIndicator = value =>{
	const matched = []
	if(value.length > 5) matched.push('greater-then-5')
	if(value.length > 7) matched.push('greater-then-7')
    if(hasNumbers(value)) matched.push('has-number')
	return matched.length


}