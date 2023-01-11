const getColor = (index: number) => {
    const colors = ['#5CCFFE', '#8744E1', '#FE718E', '#FBBA6D', '#1BD8BA']

    return colors[index % 5]
}

export default getColor;