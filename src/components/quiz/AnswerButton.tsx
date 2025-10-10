import React, { useState } from 'react';
import { Laugh, Smile, Frown, Angry, Minus, Check } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface AnswerButtonProps {
    value: number;
    label: string;
    onClick: (value: number) => void;
    isSelected: boolean;
    isDisabled: boolean;
    isDark?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const getAnswerIcon = (value: number) => {
    const iconBaseClass = "transition-all duration-300 ease-out w-10 h-10 sm:w-10 sm:h-10";

    if (value > 1) return <Laugh className={iconBaseClass} />;
    if (value > 0) return <Smile className={iconBaseClass} />;
    if (value === 0) return <Minus className={iconBaseClass} />;
    if (value < -1) return <Angry className={iconBaseClass} />;
    if (value < 0) return <Frown className={iconBaseClass} />;
    return <Minus className={iconBaseClass} />;
};

const getTileStyles = (value: number, isSelected: boolean) => {
    const base = "relative overflow-hidden transition-all duration-300 ease-out active:scale-95 group";
    
    if (isSelected) {
        if (value > 1) return `${base} !ring-2 !ring-green-500 !ring-offset-2 !bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30 dark:!ring-green-400`;
        if (value > 0) return `${base} !ring-2 !ring-lime-500 !ring-offset-2 !bg-gradient-to-br from-lime-500 to-green-500 text-white shadow-lg shadow-lime-500/30 dark:!ring-lime-400`;
        if (value === 0) return `${base} !ring-2 !ring-slate-500 !ring-offset-2 !bg-gradient-to-br from-slate-500 to-slate-600 text-white shadow-lg shadow-slate-500/30 dark:!ring-slate-400`;
        if (value < -1) return `${base} !ring-2 !ring-red-500 !ring-offset-2 !bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/30 dark:!ring-red-400`;
        return `${base} !ring-2 !ring-orange-500 !ring-offset-2 !bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30 dark:!ring-orange-400`;
    }

    return `${base} bg-gradient-to-br from-slate-100/80 to-white/60 dark:from-slate-900/40 dark:to-slate-800/20 ring-1 ring-slate-200 dark:ring-slate-700 hover:shadow-xl hover:-translate-y-1 hover:ring-slate-300/50 dark:hover:ring-slate-600/50`;
};

const getTileSizeStyles = (value: number) => {
    if (value > 1 || value < -1) return 'flex-grow-[1.2] min-h-[140px] sm:min-h-[130px]';
    if (value > 0 || value < 0) return 'flex-grow-[1] min-h-[120px] sm:min-h-[115px]';
    if (value === 0) return 'flex-grow-[0.7] min-h-[100px] sm:min-h-[90px]';
    return '';
};

const getIconColor = (value: number, isSelected: boolean) => {
    if (isSelected) return 'text-white drop-shadow-sm';
    if (value > 1) return 'text-green-600 dark:text-green-400';
    if (value > 0) return 'text-lime-600 dark:text-lime-400';
    if (value === 0) return 'text-slate-600 dark:text-slate-400';
    if (value < -1) return 'text-red-600 dark:text-red-400';
    return 'text-orange-600 dark:text-orange-400';
};

const getTextColor = (isSelected: boolean) => {
    if (isSelected) return 'text-white font-semibold drop-shadow-sm';
    return 'text-slate-700 dark:text-slate-300';
};

interface FlyingIcon {
    id: number;
    style: React.CSSProperties;
    icon: React.ReactElement;
    color: string;
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({
    value,
    label,
    onClick,
    isSelected,
    isDisabled,
    className,
    style,
}) => {
    const [flyingIcons, setFlyingIcons] = useState<FlyingIcon[]>([]);

    const handleButtonClick = () => {
        if (isDisabled) return;
        onClick(value);

        const newIcons: FlyingIcon[] = Array.from({ length: 4 }).map((_, i) => {
            const animationDuration = Math.random() * 0.6 + 0.8;
            const endY = -(Math.random() * 60 + 60);
            const endX = (Math.random() - 0.5) * 100;
            const rotation = (Math.random() - 0.5) * 360;
            return {
                id: Date.now() + i,
                icon: React.cloneElement(getAnswerIcon(value), { className: 'w-10 h-10' }),
                color: getIconColor(value, false),
                style: {
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none',
                    animation: `fly-out-modern ${animationDuration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
                    '--end-y': `${endY}px`, '--end-x': `${endX}px`, '--rotation': `${rotation}deg`,
                } as React.CSSProperties,
            };
        });
        setFlyingIcons(prev => [...prev, ...newIcons]);
        setTimeout(() => setFlyingIcons(prev => prev.filter(icon => !newIcons.some(ni => ni.id === icon.id))), 1400);
    };

    return (
        <>
            <style>
                {`@keyframes fly-out-modern { 0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; } 50% { opacity: 1; } 100% { transform: translate(calc(-50% + var(--end-x)), calc(-50% + var(--end-y))) scale(0.3) rotate(var(--rotation)); opacity: 0; } }`}
            </style>

            <button
                onClick={handleButtonClick}
                disabled={isDisabled}
                className={twMerge(
                    "flex-1 min-w-0 flex flex-col items-center justify-center gap-3 p-3 rounded-2xl",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    getTileStyles(value, isSelected),
                    getTileSizeStyles(value),
                    className
                )}
                style={style}
            >
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    {flyingIcons.map(({ id, icon, style, color }) => (
                        <div key={id} style={style} className={color}>{icon}</div>
                    ))}
                </div>

                {isSelected && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/30 to-transparent opacity-80" />
                )}

                <div className={twMerge(
                    'flex items-center justify-center relative z-10',
                    'transition-all duration-300 ease-out',
                    getIconColor(value, isSelected),
                    isSelected ? 'scale-110' : 'group-hover:scale-105 group-active:scale-95'
                )}>
                    {getAnswerIcon(value)}
                </div>

                {isSelected && (
                     <div className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 shadow-lg ring-2 ring-white/50 dark:ring-slate-700/50 animate-in zoom-in-50 duration-200 z-20">
                         <Check className="w-4 h-4 text-green-500" />
                     </div>
                )}
                
                <div className={twMerge(
                    'text-xs sm:text-sm font-medium text-center leading-tight tracking-tighter relative z-10',
                    'transition-all duration-300 ease-out',
                    getTextColor(isSelected),
                    isSelected && 'font-semibold'
                )}>
                    {label}
                </div>
            </button>
        </>
    );
};