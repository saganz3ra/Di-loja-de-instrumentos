
export const handleZoom = (zoomType: 'in' | 'out') => {
    const currentZoom = (document.body.style as any).zoom || '1';
    const newZoom = zoomType === 'in' ? parseFloat(currentZoom) + 0.1 : parseFloat(currentZoom) - 0.1;
    (document.body.style as any).zoom = newZoom.toString();
};
