const estiloCampo = {
    width: '100%',
    height: '50x',
    backgroundColor: '#EFEFEF', // Fundo azul-cinza
    borderRadius: '5px', // Borda arredondada
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            boxShadow: '0 4 20px 2px rgba(0, 0, 0, 0.25)',
            borderColor: 'transparent',
        },
        '&:hover fieldset': {
            borderColor: '#1e90ff', // Cor da borda ao passar o mouse
        },
        '&.Mui-focused fieldset': {
            boxShadow: '0 0 10px 2px rgba(30, 144, 255, 0.7)', // Borda azul borrada
            borderColor: '#1e90ff', // Cor da borda ao focar
        },
    }
}

export default estiloCampo;