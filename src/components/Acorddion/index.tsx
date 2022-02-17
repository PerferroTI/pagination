import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {
    BatteryChargingFull,
    Spa,
    AcUnit,
    WhatshotOutlined,
    Build,
    LocalAirportOutlined,
    SupervisedUserCircleSharp,
  } from "@mui/icons-material";

  import styles from './index.module.scss'


export function AccordionGuia() {

    const guia = [
        {   
            id: '0215',
            title: 'Economia',
            content: `Equipamento com um consumo de apenas 1kw/h. Desenvolvido 
            tendo em vista aliviar o bolso do cliente/usuário no final de cada mes em especial
            nas epocas mais quentes, onde se faz mais necessária a aquisição e uso do Climatizador 
            por longos períodos. Os Climatizadores Perferro tendem a trabalhar da maneira mais eficiente 
            consumindo o minímo de energia. Sendo mais econômico do que o tradicional ar-condicionado`,
            icon: <BatteryChargingFull/>
        },
        {
            id: '5454',
            title: 'Ecológico',
            content: `A grande procupação da nova era, é em diminuir as agressões causadas
            ao meio ambiente pela indústria e seu poluentes. Caminhando junto ao que o mundo todo 
            propõe, combatendo e inovando cada vez mais a diminuir esses males e entrar no que é chamado
            de INDUSTRIA VERDE. Nossos produtos são produzidos e pensados a servir a sociedade sem agredir
            o meio ambiente: Caixa em fibra de vidro, altamente durável, podendo ser fácilmente reparada a 
            danos em sua estrutura. Resfriamento todo a base d'água, evitando o uso de gáses que são 
            poluentes ferozes.`,
            icon: <Spa/>
        },
        {
          id: '34154',
          title: 'Bem Estar',
          content: `Resfriamento todo a base d'água, trazendo com o ar proeminente que passa pelas placas 
          evaporátivas, particulas de água, deixando o ar mais umido e agradável. Especialmente a pessoas que
          possuem doenças respiratórias, como a rinite, bronquite e entre outras várias doenças provindas do ar,
          o Climatizador Evaporativo PERFERRO, prove um ar umidificado, fresco e ágradavel permitindo a execução 
          de trabalhos e/ou permanencia nos ambientes climatizadores por nossos aparelhos, por longos períodos sem
          prejudicar o bem estar. Equilibrando assim o ar fresco e umido vindo dos climatizadores, com o calor e 
          ar quente podendo vir de maquinários industriais e/ou comercias no ambiente.`,
          icon: <AcUnit/>
      },
      {
        id: '641688',
        title: 'Produtividade',
        content: `Sendo altamente recomendável a ambientes onde há alto número de circulação ou permanencia de
         pessoas, seja a trabalho ou lazer. Os Climatizadores Evaportivos PERFERRO, garantem uma maior circulação de ar,
         sendo um ar umidificado, fresco e agradável onde é renovado constantemente, dando a clientes e colaboradores, 
         uma diminuição da temperatura significativa, ar umido, renovado, fresco e agradável`,
        icon: <SupervisedUserCircleSharp/>
    },
    {
      id: '111120215',
      title: 'Atendimento Para Todo o Brasil',
      content: `A Climatizadores PERFERRO possuí vários representantes em todo o país, além de seu atendimento online por whatsapp, e-mail e telefone. Nossos aparelhos já se encontram em vários Estados ao redor do país, sendo as entregas através do frete FOB ou CIF, podendo
      também nos fazer uma visita e conhecer nossa sede, onde nossos aparelhos são cuidadosamente fabricados.`,
      icon: <LocalAirportOutlined/>
    },
    {
      id: '44164641',
      title: 'Assistência Técnica ',
      content: `Profissionais capacitados e em constante treinamento, afim de resolver os problemas com as melhores e mais eficientes técnicas 
      do mercado. Higienização Completa de Climatizadores Evaporativos, Check-up e Troca de componentes danificados, além de instalação, troca e/ou reforma estrutural do aparelho e/ou caixa, de quaisquer climatizadores do mercado.`,
      icon: <Build/>
    }
    ]

    const todo = guia.map((noi, index) =>
  <li key={index} className={styles.li}>
    <Accordion>
      <AccordionSummary
          expandIcon={noi.icon}
          aria-controls="panel1a-content"
          className={styles.summary}
      >
          <Typography className={styles.title}>{noi.title}</Typography>
              
      </AccordionSummary>
         <AccordionDetails>
           <Typography className={styles.content}>
               {noi.content}
           </Typography>
          </AccordionDetails>
      </Accordion>
  </li>
);


  return (
    <div className={styles.container}>
        {todo}
    </div>
  );
}
