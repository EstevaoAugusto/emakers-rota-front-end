import { Button, TextField } from "@mui/material"

export default function Header(){

    return (
        <>
            <header>
                
                <Button variant="text">Text</Button>
                <Button variant="text">Lançamentos</Button>
                <Button variant="text">Populares</Button>
                <Button variant="text">Gêneros</Button>
                <Button variant="text">Promoçoes</Button>
                <Button variant="text">Conta</Button>
                <TextField id="outlined-basic" label=""  variant="outlined" />
            </header>
        </>
    )
}