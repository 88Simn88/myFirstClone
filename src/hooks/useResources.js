import { useState, useEffect } from "react";

const initialTimerValue = 1800; // 30 minutos en segundos

const useResources = () => {

const [resources, setResources] = useState({
    plata: 0,
    trigo: 0,
    soldados: 0,
});

const [accumulated, setAccumulated] = useState({
    plata: 0,
    trigo: 0,
    soldados: 0,
});

const [claims, setClaims] = useState(0);
const [timers, setTimers] = useState({
    plata: initialTimerValue,
    trigo: initialTimerValue,
    soldados: initialTimerValue,
});

// Cargar recursos iniciales desde localStorage
useEffect(() => {
    const loadResources = () => {
        const savedResources = {
            plata: parseInt(localStorage.getItem("plata"), 10) || 0,
            trigo: parseInt(localStorage.getItem("trigo"), 10) || 0,
            soldados: parseInt(localStorage.getItem("soldados"), 10) || 0,
        };

        const savedAccumulated = {
            plata: parseInt(localStorage.getItem("accumulated_plata"), 10) || 0,
            trigo: parseInt(localStorage.getItem("accumulated_trigo"), 10) || 0,
            soldados: parseInt(localStorage.getItem("accumulated_soldados"), 10) || 0,
        };

        const savedClaims = parseInt(localStorage.getItem("claims"), 10) || 0;

        const currentTime = Date.now();
        const savedTimers = {
            plata: parseInt(localStorage.getItem("timer_plata"), 10) || initialTimerValue,
            trigo: parseInt(localStorage.getItem("timer_trigo"), 10) || initialTimerValue,
            soldados: parseInt(localStorage.getItem("timer_soldados"), 10) || initialTimerValue,
        };

        const lastUpdateTime = parseInt(localStorage.getItem("last_update_time"), 10) || currentTime;

        const elapsed = Math.floor((currentTime - lastUpdateTime) / 1000);

        setResources(savedResources);
        setAccumulated(savedAccumulated);
        setClaims(savedClaims);
        setTimers({
            plata: Math.max(savedTimers.plata - elapsed, 0),
            trigo: Math.max(savedTimers.trigo - elapsed, 0),
            soldados: Math.max(savedTimers.soldados - elapsed, 0),
        });
    };

    loadResources();
}, []);

// Actualizar temporizadores y acumular recursos
useEffect(() => {
    const intervalId = setInterval(() => {
        const currentTime = Date.now();

        setTimers(prev => {
            const newTimers = {
                plata: prev.plata > 0 ? prev.plata - 1 : initialTimerValue,
                trigo: prev.trigo > 0 ? prev.trigo - 1 : initialTimerValue,
                soldados: prev.soldados > 0 ? prev.soldados - 1 : initialTimerValue,
            };

            if (newTimers.plata === initialTimerValue) {
                setAccumulated(prev => ({
                    ...prev,
                    plata: Math.min(prev.plata + 1000, 10000),
                }));
            }

            if (newTimers.trigo === initialTimerValue) {
                setAccumulated(prev => ({
                    ...prev,
                    trigo: Math.min(prev.trigo + 1000, 10000),
                }));
            }

            if (newTimers.soldados === initialTimerValue) {
                setAccumulated(prev => ({
                    ...prev,
                    soldados: Math.min(prev.soldados + 1000, 10000),
                }));
            }

            localStorage.setItem("timer_plata", newTimers.plata);
            localStorage.setItem("timer_trigo", newTimers.trigo);
            localStorage.setItem("timer_soldados", newTimers.soldados);
            localStorage.setItem("last_update_time", currentTime);

            return newTimers;
        });

        setAccumulated(prev => {
            localStorage.setItem("accumulated_plata", prev.plata);
            localStorage.setItem("accumulated_trigo", prev.trigo);
            localStorage.setItem("accumulated_soldados", prev.soldados);
            return prev;
        });

        localStorage.setItem("claims", claims);
    }, 1000);

    return () => clearInterval(intervalId);
}, [claims]);

//resetear claims cada 24 horas

useEffect(() => {
const resetClaims = () => {
    setClaims(0)
    localStorage.setItem("claims",0)
}

const now = new Date()

const nextMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0, 0, 0

)
const timeUntilMidnight = nextMidnight - now

const midnightTimeout = setTimeout(resetClaims, timeUntilMidnight)

const dailyInterval = setInterval(resetClaims, 24 * 60 * 60 * 1000 )

return () => {
    clearTimeout(midnightTimeout)
    clearInterval(dailyInterval)
}
}, [])

const claimResource = (type) => {
    if (claims < 10) {
        const newResources = {
            plata: type === 'plata' ? resources.plata + accumulated.plata : resources.plata,
            trigo: type === 'trigo' ? resources.trigo + Math.floor(accumulated.trigo * 0.8) : resources.trigo,
            soldados: type === 'soldados' ? resources.soldados + accumulated.soldados : resources.soldados,
        };

        setResources(newResources);
        localStorage.setItem("plata", newResources.plata);
        localStorage.setItem("trigo", newResources.trigo);
        localStorage.setItem("soldados", newResources.soldados);

        setAccumulated(prev => ({
            ...prev,
            [type]: 0,
        }));

        setClaims(claims + 1);
        setTimers(prev => ({
            ...prev,
            [type]: initialTimerValue,
        }));
    }
};

const claimAllResources = () => {
    if (claims < 10) {
        const newResources = {
            plata: resources.plata + accumulated.plata,
            trigo: resources.trigo + Math.floor(accumulated.trigo * 0.8),
            soldados: resources.soldados + accumulated.soldados,
        };

        setResources(newResources);
        localStorage.setItem("plata", newResources.plata);
        localStorage.setItem("trigo", newResources.trigo);
        localStorage.setItem("soldados", newResources.soldados);

        setAccumulated({ plata: 0, trigo: 0, soldados: 0 });
        setClaims(claims + 1);
        setTimers({
            plata: initialTimerValue,
            trigo: initialTimerValue,
            soldados: initialTimerValue,
        });
    }
};

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

return {
    resources,
    accumulated,
    claims,
    timers,
    claimResource,
    claimAllResources,
    formatTime,
}

}

export default useResources