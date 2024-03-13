import '../aboutme/About.css';
export default function About() {

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-5 satisfy-regular">About me</h1>

                <div className="mt-5" style={{ width: "70%" }}>
                    <p className="testo-viola-scuro fs-3 text-center lh-sm text-justify source-code-pro-about">Appassionata di informatica e programmazione, sempre alla ricerca di nuove sfide e opportunità di apprendimento, sono determinata a padroneggiare nuovi linguaggi di programmazione e ad abbracciare le più recenti tecnologie.
                        Mi contraddistinguo per la mia proattività e per le eccellenti capacità di problem solving. Inoltre, sono profondamente incline al lavoro di squadra, credendo fermamente che il collaborare con altri possa portare a risultati migliori e più soddisfacenti.</p>
                </div>
            </div>
        </>
    );
}