import React from 'react'
import style from './ComoTrabajo.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function ComoTrabajo() {
  return (
    <div className={style.divComoTrabajo}>
        <h2 className={style.h2ComoTrabajo}>¿Cómo Trabajamos?</h2>
        <div className={style.divComoTrabajoHijo}> 
            <div className={style.divComoTrabajon_hijomenor}>
           < ShoppingCartIcon/>
                <h2 className={style.h2ComoTrabajo}>Elegí tus productos</h2>
                <p className={style.pComoTrabajo}> "Diversidad y excelencia adecuadas para tu residencia y empresa."</p>
            </div>
            <div className={style.divComoTrabajon_hijomenor}>
               <WhatsAppIcon/>
                <h2 className={style.h2ComoTrabajo}>Realizá tu pedido</h2>
                <p className={style.pComoTrabajo}>Podes realizar tu pedido aca en nuestra web o redes sociales.</p>
            </div>
            <div className={style.divComoTrabajon_hijomenor}>
               <SettingsAccessibilityIcon/>
                <h2 className={style.h2ComoTrabajo}>Atencion Personalizada</h2>
                <p className={style.pComoTrabajo}>Coordina con nosotros tu pedido y el envío.</p>
            </div>
        </div>
    </div>
  )
}

export default ComoTrabajo