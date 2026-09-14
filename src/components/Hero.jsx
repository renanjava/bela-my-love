import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

/**
 * Hero — Seção de abertura com contador ao vivo de tempo juntos
 * Início do relacionamento: 26 de Junho de 2026
 */

const START_DATE = new Date(2026, 5, 26, 0, 0, 0); // Mês 5 = Junho (0-indexed)

function getTimeTogether() {
    const now = new Date();
    const diffMs = Math.max(0, now - START_DATE);

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
    const seconds = Math.floor((diffMs / 1000) % 60);

    return { days, hours, minutes, seconds };
}

export default function Hero() {
    const [time, setTime] = useState(getTimeTogether());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeTogether());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const units = [
        { label: 'Dias', value: time.days },
        { label: 'Horas', value: time.hours },
        { label: 'Minutos', value: time.minutes },
        { label: 'Segundos', value: time.seconds },
    ];

    return (
        <section className="hero-section" id="hero">
            <div className="hero-glow" />

            <div className="hero-content">
                <motion.div
                    className="hero-heart"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                >
                    💕
                </motion.div>

                <motion.h1
                    className="text-gradient hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    Renan & Isabela
                </motion.h1>

                <motion.p
                    className="text-script hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Juntos desde 26 de Junho de 2026
                </motion.p>

                <motion.div
                    className="hero-counter-grid"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {units.map((unit) => (
                        <div key={unit.label} className="hero-counter-card glass-card">
                            <span className="hero-counter-value">
                                {String(unit.value).padStart(2, '0')}
                            </span>
                            <span className="hero-counter-label">{unit.label}</span>
                        </div>
                    ))}
                </motion.div>

                <motion.p
                    className="hero-counter-footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    E contando, a cada segundo... 💖
                </motion.p>
            </div>
        </section>
    );
}