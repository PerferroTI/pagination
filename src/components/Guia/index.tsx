
import Link from 'next/link';
import styles from './index.module.scss'


export function Guia() {
    return (
        <div className={styles.container}>
            <div className={styles.guia}>
                <Header title={'CONHEÇA'}/>
                <Info 
                primeiraLink={'#'}
                primeiraA={'NOSSOS'} primeiraB={'PRODUTOS'}
                segundaLink={'#'}
                segundaA={'FALE'} segundaB={'CONOSCO'}
                />
            </div>

            <div className={styles.guia}>
                <Header title={'MÉTODOS'}/>
                <Info
                    primeiraLink={'https://google.com/'}
                    primeiraA={'BOLETO'} primeiraB={'CARTÃO, CHEQUE'}
                    segundaLink={'#'}
                    segundaA={'PARCELAMOS'} segundaB={'EM ATÉ 12X'}
                />
            </div>

            <div className={styles.guia}>
                <Header title={'REDES SOCIAIS'}/>
                <Info 
                    target="_blank"
                    primeiraLink={'https://pt-br.facebook.com/Climaizadoresperferro'}
                    primeiraA={'º'} primeiraB={'FACEBOOK'}
                    segundaLink={'https://www.instagram.com/climatizadoresperferro/'}
                    segundaA={'º'} segundaB={'INSTAGRAM'}
                />
            </div>
        </div>
    );
}


type HeaderProps = {
    title: string;
}

function Header ({title}: HeaderProps) {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <span>.</span>
        </div>
    )
}


type InfoProps = {
    primeiraA: string;
    primeiraB?: string;
    
    segundaA: string;
    segundaB?: string;

    primeiraLink: string;
    segundaLink: string;
    target?: string;
} 

function Info ({primeiraA, primeiraB, segundaA, segundaB, primeiraLink, segundaLink, target}: InfoProps) {
    return (
        <div className={styles.info}> 
            <p className={styles.icon}></p>
            <Link href={primeiraLink}>
                <a target={target} className={styles.primeiraInfo}>{primeiraA} <br/> {primeiraB} <span></span></a>
            </Link>
            <br/>
            <Link href={segundaLink}>
                <a target={target} className={styles.segundaInfo}>{segundaA} <br/> {segundaB}</a>
            </Link>
        </div>
    )
}

