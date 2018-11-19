export interface SlideMenu {
    id?: string, //id do item
    label?: string, //string que será exibida no menu
    icone?: string, //icone do fontawesome
    rota?: string, //endereço da rota caso NÃO tenha filhos
    possuiFilho?: boolean, //true = possui filhos, false = não possui filhos
    idPai?: string //campo opcional, usado para indicar o ID do item Pai 
    possuiAutorizacao?: boolean //flag para roles
}
