import React, { useEffect, useState } from 'react';
import styles from "./InstallPrompt.module.css";


const InstallPrompt = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        // Detectar si la aplicación ya está instalada
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsInstalled(true);
        }

        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setIsVisible(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                setDeferredPrompt(null);
                setIsVisible(false);
            });
        }
    };

    const handleCancelClick = () => {
        setIsVisible(false);
    };

    return (

        !isInstalled && isVisible && (

            <div className={styles.installPrompt}>

                <div className={styles.containerTexto}>
                    <p className={styles.textoPregunta}>¿Deseas instalar esta aplicación?</p>
                </div>

                <div className={styles.containerBtns}>
                    <button onClick={handleInstallClick} className={styles.btn}>Instalar</button>
                    <button onClick={handleCancelClick} className={styles.btn}>Cancelar</button>
                </div>
                
            </div>
        )
    );
};

export default InstallPrompt;
