import React, { forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GlassCard = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('glass-card p-6 md:p-8', className)} {...props}>
      {children}
    </div>
  )
);
GlassCard.displayName = "GlassCard";

export const Button = ({ children, className, variant = 'primary', href, to, ...props }: any) => {
  const baseClass = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl px-6 py-3 cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white shadow-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-[0.98]",
    success: "bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-[1.02]",
    ghost: "border border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white"
  };
  const classes = cn(baseClass, variants[variant as keyof typeof variants], className);

  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  if (href) return <a href={href} className={classes} {...props}>{children}</a>;
  return <button className={classes} {...props}>{children}</button>;
};

export const AuthorInline = ({ author }: { author: any }) => (
  <div className="flex items-center gap-4 text-left">
    <img src={author.photo} alt={author.name} className="w-16 h-16 rounded-full border-2 border-indigo-500 object-cover" />
    <div>
      <h4 className="text-white font-bold m-0 leading-tight">{author.name}</h4>
      <p className="text-sm text-slate-400 m-0 leading-tight">{author.title} \u2014 {author.site}</p>
    </div>
  </div>
);

export const LegalFooter = () => (
  <footer className="py-8 text-center text-sm text-slate-500 max-w-4xl mx-auto px-4 mt-auto">
    <p className="mb-4">
      The income figures mentioned on this page represent potential earnings and are not guarantees of typical results. Affiliate marketing results depend entirely on individual effort, consistency, market conditions, and the products promoted. Most people who attempt affiliate marketing do not earn significant income. digitaltoolkt.com.ng makes no guarantee of income or specific results from implementing anything described here.
    </p>
    <div className="flex justify-center gap-4 mb-4">
      <Link to="/" className="hover:text-slate-300 transition">Privacy Policy</Link>
      <Link to="/" className="hover:text-slate-300 transition">Terms of Service</Link>
    </div>
    <p>&copy; 2026 digitaltoolkt.com.ng</p>
  </footer>
);
