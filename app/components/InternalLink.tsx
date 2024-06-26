import { MdArrowForward } from 'react-icons/md';
import Link from 'next/link';
import styles from './InternalLink.module.css';

interface InternalLinkProps {
    href: string;
    text: string;
    large: boolean;
}

const InternalLink: React.FC<InternalLinkProps> = ({ href, text, large }) => {
    return (
        <Link href={href} className={styles.link}>
            <div
                className={`p-1 pl-2 md:pl-3 md:pr-2 md:py-2 font-light rounded-full border border-stone-100 before:bg-stone-100 ${
                    styles.linkContents
                } overflow-hidden ${
                    large ? 'text-base md:text-xl' : 'text-xs md:text-lg'
                }`}
            >
                <div className="flex justify-between items-center mix-blend-difference text-stone-100">
                    <p>{text}</p>
                    <div className="overflow-hidden">
                        <MdArrowForward
                            className={`${styles.arrow} ml-1 md:ml-3 ${
                                large
                                    ? 'text-xl md:text-4xl'
                                    : 'text-lg md:text-3xl'
                            }`}
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default InternalLink;
