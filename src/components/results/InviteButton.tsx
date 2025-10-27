import React, { useState, useEffect, useRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { GlassButton } from '../ui/GlassButton';
import { OpaqueGlassTile } from '../ui/OpaqueGlassTile';

import { UserPlus, Check, ChevronRight, type LucideProps } from 'lucide-react'; 

import SmsIcon from '../../images/icons/sms.svg?react';
import MailIcon from '../../images/icons/email.svg?react';
import CopyIcon from '../../images/icons/copy-4.svg?react';
import WhatsappIcon from '../../images/icons/whatsapp-3.svg?react';
import TelegramIcon from '../../images/icons/telegram-3.svg?react';
import MessengerIcon from '../../images/icons/messenger-2.svg?react';
import FacebookIcon from '../../images/icons/facebook-3.svg?react';
import TwitterIcon from '../../images/icons/twitter-2.svg?react';

type IconComponentType = React.FC<LucideProps | React.SVGProps<SVGSVGElement>>;


interface InviteButtonProps {
  className?: string;
  variant?: 'primary' | 'tertiary';
  size?: 'lg' | 'md';
}

export const InviteButton: React.FC<InviteButtonProps> = ({
  className,
  variant = 'primary',
  size = 'lg',
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [copyState, setCopyState] = useState<'idle' | 'success'>('idle');
  const tooltipRef = useRef<HTMLDivElement>(null);

  const shareData = useMemo(() => {
    const text = `Je viens de faire ce test politique, essaie-le aussi pour voir tes résultats et découvrir ton parti !`;
    const url = 'https://testpolitique.app';
    return { text, url };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsTooltipOpen(false);
      }
    };
    if (isTooltipOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isTooltipOpen]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      setCopyState('success');
      setTimeout(() => setCopyState('idle'), 2000);
    } catch (error) {
      console.error('Erreur lors de la copie', error);
    }
  };

  const shareOptions = [
    { id: 'sms', name: 'SMS', icon: SmsIcon as IconComponentType, href: `sms:?&body=${encodeURIComponent(shareData.text + ' ' + shareData.url)}` },
    { id: 'mail', name: 'Mail', icon: MailIcon as IconComponentType, href: `mailto:?subject=${encodeURIComponent('Découvre ce test politique')}&body=${encodeURIComponent(shareData.text + '\n\nFais le test ici : ' + shareData.url)}` },
    {
      id: 'copy',
      name: 'Copier',
      icon: (copyState === 'success' ? Check : CopyIcon) as IconComponentType, 
      onClick: handleCopyLink,
      text: copyState === 'success' ? 'Copié !' : 'Copier',
    },
    { id: 'whatsapp', name: 'WhatsApp', icon: WhatsappIcon as IconComponentType, href: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}` },
    { id: 'telegram', name: 'Telegram', icon: TelegramIcon as IconComponentType, href: `https://t.me/share/url?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(shareData.text)}` },
    { id: 'messenger', name: 'Messenger', icon: MessengerIcon as IconComponentType, href: `fb-messenger://share/?link=${encodeURIComponent(shareData.url)}` },
    { id: 'facebook', name: 'Facebook', icon: FacebookIcon as IconComponentType, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}` },
    { id: 'twitter', name: 'X', icon: TwitterIcon as IconComponentType, href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(shareData.text)}` },
  ];

  return (
    <div className={`relative z-20 ${className}`} ref={tooltipRef}>
      <div
        className={`absolute bottom-full mb-3 w-full max-w-xs sm:max-w-sm left-1/2 -translate-x-1/2 origin-bottom transform transition-all duration-300 ease-out
                    ${isTooltipOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
      >
        <OpaqueGlassTile className="p-2">
          <div className="flex flex-col gap-1">
            {shareOptions.map((option) => {
              const IconComponent = option.icon;
              const isCopySuccess = option.id === 'copy' && copyState === 'success';

              const listItemContent = (
                <>
                  <div className={twMerge(
                    "relative flex items-center justify-center w-8 h-8 rounded-xl shadow-md mr-2",
                    "ring-1 ring-white/10 transition-all duration-300",
                    isCopySuccess
                      ? "bg-gradient-to-br from-emerald-500 to-green-600"
                      : "bg-gradient-to-br from-blue-500 to-indigo-600"
                  )}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span className={twMerge(
                    "flex-grow font-semibold text-sm",
                    isCopySuccess
                      ? "text-emerald-700 dark:text-emerald-300"
                      : "text-slate-800 dark:text-slate-200"
                  )}>
                    {option.text || option.name}
                  </span>
                  
                  {isCopySuccess ? (
                      <Check className="w-4 h-4 text-emerald-500 ml-2 flex-shrink-0" />
                  ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 ml-2 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                  )}
                </>
              );

              const listItemProps = {
                key: option.id,
                className: twMerge(
                  "group flex w-full items-center text-left p-1.5 rounded-xl transition-all duration-200",
                  "hover:bg-slate-100 dark:hover:bg-slate-700/50 active:scale-[0.98]",
                  isCopySuccess && "bg-emerald-50/80 dark:bg-emerald-950/20"
                ),
                onClick: option.onClick,
              };
              
              if (option.href) {
                return (
                  <a {...listItemProps} href={option.href} target="_blank" rel="noopener noreferrer">
                    {listItemContent}
                  </a>
                );
              }

              return (
                <button type="button" {...listItemProps}>
                  {listItemContent}
                </button>
              );
            })}
          </div>
        </OpaqueGlassTile>
      </div>

      <GlassButton
        onClick={() => setIsTooltipOpen(!isTooltipOpen)}
        variant={variant}
        size={size}
        className="w-full"
        icon={<UserPlus className="w-6 h-6" />}
      >
        Inviter un ami
      </GlassButton>
    </div>
  );
};