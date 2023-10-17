import './accordion.css';

export const createAccordion = () => {
 
    const accordion = `
<h3>
    <button aria-expanded="true" aria-controls="accordion-panel" id="accordion-button">Button</button>
</h3>
<div id="accordion-panel" role="region" aria-labelledby="accordion-button" class="accordion-panel">
    <p>Litora conubia at fringilla odio semper elementum condimentum ullamcorper ad vitae condimentum volutpat iaculis tellus parturient dui sagittis odio adipiscing taciti. Ligula condimentum a fames dui tempor pharetra a consectetur a suspendisse lacus tristique a a duis mi dis a curae.</p>
</div>
    `;
    return accordion;
};
