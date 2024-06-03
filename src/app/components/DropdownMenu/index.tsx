import React, { PropsWithChildren, ReactElement } from 'react';

interface DropdownMenuProps {
    children: React.ReactNode;
}

interface DropdownMenuTriggerProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

interface DropdownMenuContentProps {
    children: React.ReactNode;
    isOpen: boolean;
}

interface DropdownMenuItemProps {
    children: React.ReactNode;
}

interface DropdownMenuLabelProps {
    children: React.ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleTriggerClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    if ((child as ReactElement<PropsWithChildren<DropdownMenuTriggerProps>>).type === DropdownMenuTrigger) {
                        return React.cloneElement(child as ReactElement<PropsWithChildren<DropdownMenuTriggerProps>>, { onClick: handleTriggerClick });
                    }
                    if ((child as ReactElement<PropsWithChildren<DropdownMenuContentProps>>).type === DropdownMenuContent) {
                        return React.cloneElement(child as ReactElement<PropsWithChildren<DropdownMenuContentProps>>, { isOpen });
                    }
                }
                return child;
            })}
        </div>
    );
};

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children, className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ children, isOpen }) => {
    if (!isOpen) return null;
    return (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">{children}</div>
        </div>
    );
};

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ children }) => {
    return (
        <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
            {children}
        </a>
    );
};

export const DropdownMenuLabel: React.FC<DropdownMenuLabelProps> = ({ children }) => {
    return (
        <span className="block px-4 py-2 text-sm text-gray-900 font-bold">
            {children}
        </span>
    );
};
