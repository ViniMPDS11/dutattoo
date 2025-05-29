import { useState } from "react";

import Form from "../components/Form/Form";
import Fieldset from './../components/Fieldset/Fieldset';
import InputRadio from './../components/InputRadio/InputRadio';
import style from "./calculator.module.css";
import Select from './../components/Select/Select';
import Button from './../components/Button/Button';

// Icones
import { IoWarning } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Calculator() {
    const basePorTamanho = {
        small: 150,
        medium: 250,
        large: 400,
        xlarge: 600,
    };

    const estiloMultiplicador = {
        minimalista: 1.0,
        oldschool: 1.1,
        realismo: 1.5,
        geometrico: 1.3,
        tribal: 1.2,
        aquarela: 1.4,
    };

    const localAcrescimo = {
        braco: 0,
        antebraco: 0,
        biceps: 10,
        ombro: 10,
        perna: 0,
        coxa: 10,
        panturrilha: 10,
        joelho: 30,
        tornozelo: 40,
        pe: 50,
        mao: 50,
        dedo: 60,
        pulso: 30,
        costas: 0,
        coluna: 40,
        lombar: 30,
        peito: 20,
        costela: 80,
        abdomen: 30,
        barriga: 30,
        pescoco: 50,
        nuca: 30,
        rosto: 80,
        orelha: 60,
        queixo: 70,
        maxilar: 70,
        cintura: 30,
        virilha: 70,
        intima: 100
    };

    const corAcrescimo = {
        pretoebranco: 0,
        colorida: 70,
    };

    const detalhamentoMultiplicador = {
        low: 1.0,
        medium: 1.2,
        high: 1.4,
    };

    const [form, setForm] = useState({
        size: "",
        style: "",
        local: "",
        color: "",
        detail: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!form.size) newErrors.size = "Escolha um tamanho.";
        if (!form.style) newErrors.style = "Escolha um estilo.";
        if (!form.local) newErrors.local = "Escolha um local do corpo.";
        if (!form.color) newErrors.color = "Escolha a cor.";
        if (!form.detail) newErrors.detail = "Escolha o nível de detalhamento.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const [preco, setPreco] = useState("");

    const calcularPreco = () => {
        const base = basePorTamanho[form.size];
        const estilo = estiloMultiplicador[form.style];
        const detalhamento = detalhamentoMultiplicador[form.detail];
        const local = localAcrescimo[form.local];
        const cor = corAcrescimo[form.color];

        const preco = base * estilo * detalhamento + local + cor;
        return preco;
    };

    const nomesPorTamanho = {
        small: "Pequena (até 5cm)",
        medium: "Média (6cm a 15cm)",
        large: "Grande (15cm a 25cm)",
        xlarge: "Muito grande (mais de 25cm)",
    };

        const nomesPorEstilo = {
        minimalista: "Minimalista",
        oldschool: "Old School",
        realismo: "Realismo",
        geometrico: "Geométrico",
        tribal: "Tribal",
        aquarela: "Aquarela",
    };

        const nomesPorCor = {
        pretoebranco: "Preto e branco",
        colorida: "Colorida",
    };

        const nomesPorDetalhamento = {
        low: "Pouco detalhado",
        medium: "Detalhamento médio",
        high: "Muito detalhado",
    };

        const nomesPorLocal = {
        braco: "Braço",
        antebraco: "Antebraço",
        biceps: "Bíceps",
        ombro: "Ombro",
        perna: "Perna",
        coxa: "Coxa",
        panturrilha: "Panturrilha",
        joelho: "Joelho",
        tornozelo: "Tornozelo",
        pe: "Pé",
        mao: "Mão",
        dedo: "Dedo",
        pulso: "Pulso",
        costas: "Costas",
        coluna: "Coluna",
        lombar: "Lombar",
        peito: "Peito",
        costela: "Costela",
        abdomen: "Abdômen",
        barriga: "Barriga",
        pescoco: "Pescoço",
        nuca: "Nuca",
        rosto: "Rosto",
        orelha: "Orelha",
        queixo: "Queixo",
        maxilar: "Maxilar",
        cintura: "Cintura",
        virilha: "Virilha",
        intima: "Região íntima",
    };

    const message = `
Olá! Gostaria de um orçamento para uma tatuagem com as seguintes características:\n
Tamanho: ${nomesPorTamanho[form.size]}
Estilo: ${nomesPorEstilo[form.style]}
Local do corpo: ${nomesPorLocal[form.local]}
Cor: ${nomesPorCor[form.color]}
Detalhamento: ${nomesPorDetalhamento[form.detail]}`;

    const encodeMesage = encodeURIComponent(message);

    return (
        <>
            <h1 className={style.title}>
                ORÇAMENTO DE<br/><span>TATUAGEM</span>
            </h1>
            <Form>
                <section>
                    <Fieldset classNameLegend={style.required} title="Tamanho da tatuagem">
                        <InputRadio
                        change={e => setForm({...form, size: e.target.value})}
                        required={true} name="size" value="small" radioName="Pequena (até 5cm)" />
                        <InputRadio
                        change={e => setForm({...form, size: e.target.value})}
                        name="size" value="medium" radioName="Média (6cm a 15cm)" />
                        <InputRadio
                        change={e => setForm({...form, size: e.target.value})}
                        name="size" value="large" radioName="Grande (15cm a 25cm)" />
                        <InputRadio
                        change={e => setForm({...form, size: e.target.value})}
                        name="size" value="xlarge" radioName="Muito grande (mais de 25cm)" />
                        {errors.size && <p className={style.error}>{errors.size}</p>}
                    </Fieldset>
                </section>
                <section className={style.formGroup}>
                    <Select classNameLabel={style.required} value={form.style} change={e => setForm({...form, style: e.target.value})} required={true} idAndName="style" label='Estilo'>
                        <option value="" disabled hidden>Selecione uma opção</option>
                        <option value="minimalista">Minimalista</option>
                        <option value="oldschool">Old School</option>
                        <option value="realismo">Realismo</option>
                        <option value="geometrico">Geométrico</option>
                        <option value="tribal">Tribal</option>
                        <option value="aquarela">Aquarela</option>
                    </Select>
                    {errors.style && <p className={style.error}>{errors.style}</p>}
                </section>
                <section className={style.formGroup}>
                    <Select classNameLabel={style.required} value={form.local} change={e => setForm({...form, local: e.target.value})} required={true} idAndName="location" label="Local do corpo">
                        <option value="" disabled hidden>Selecione uma opção</option>
                        <option value="braco">Braço</option>
                        <option value="antebraco">Antebraço</option>
                        <option value="biceps">Bíceps</option>
                        <option value="ombro">Ombro</option>
                        <option value="perna">Perna</option>
                        <option value="coxa">Coxa</option>
                        <option value="panturrilha">Panturrilha</option>
                        <option value="joelho">Joelho</option>
                        <option value="tornozelo">Tornozelo</option>
                        <option value="pe">Pé</option>
                        <option value="mao">Mão</option>
                        <option value="dedo">Dedo</option>
                        <option value="pulso">Pulso</option>
                        <option value="costas">Costas</option>
                        <option value="coluna">Coluna</option>
                        <option value="lombar">Lombar</option>
                        <option value="peito">Peito</option>
                        <option value="costela">Costela</option>
                        <option value="abdomen">Abdômen</option>
                        <option value="barriga">Barriga</option>
                        <option value="pescoco">Pescoço</option>
                        <option value="nuca">Nuca</option>
                        <option value="rosto">Rosto</option>
                        <option value="orelha">Orelha</option>
                        <option value="queixo">Queixo</option>
                        <option value="maxilar">Maxilar</option>
                        <option value="cintura">Cintura</option>
                        <option value="virilha">Virilha</option>
                        <option value="intima">Região íntima</option>
                    </Select>
                    {errors.local && <p className={style.error}>{errors.local}</p>}
                </section>
                <section className={style.formGroup}>
                    <Fieldset classNameLegend={style.required} className="formGroup" title="Cor">
                        <InputRadio
                        change={e => setForm({...form, color: e.target.value})}
                        name="color" value="pretoebranco" radioName="Preto e branco" />
                        <InputRadio
                        change={e => setForm({...form, color: e.target.value})}
                        name="color" value="colorida" radioName="Colorida" />
                        {errors.color && <p className={style.error}>{errors.color}</p>}
                    </Fieldset>
                </section>
                <section className={style.formGroup}>
                    <Select classNameLabel={style.required} value={form.detail} change={e => setForm({...form, detail: e.target.value})} required={true} idAndName="detailing" label="Nível de detalhamento">
                        <option value="" disabled hidden>Selecione uma opção</option>
                        <option value="low">Pouco detalhado</option>
                        <option value="medium">Médio</option>
                        <option value="high">Muito detalhado</option>
                    </Select>
                    {errors.detail && <p className={style.error}>{errors.detail}</p>}
                </section>
                <section className={style.formActions}>
                    <Button click={(e) => {
                        e.preventDefault();
                            if (validateForm()) {
                                const preco = calcularPreco();
                                console.log("Preço estimado:", preco);
                            }
                        setPreco(calcularPreco());
                    }} type="submit">
                        Calcular orçamento
                    </Button>
                </section>
                {
                    preco > 0 &&
                    <div className={style.resultDiv}>
                        <span className={style.result}>
                            <FaMoneyBillWave style={{color: "#006400", flexShrink: 0}} size={28} />
                            <p>
                                O valor estimado é de:{' '}
                                <span>R${preco},00</span>
                            </p>
                        </span>
                        <a target="_blank" href={`https://wa.me/5511985885233?text=${encodeMesage}`}>
                            <FaWhatsapp style={{flexShrink: 0}} size={28} />
                            Enviar mensagem
                        </a>
                    </div>
                }
                <span className={style.warning}>
                    <IoWarning style={{color: "#efcb00", flexShrink: 0}} size={80} />
                    <p>
                        O valor apresentado é apenas uma <strong>estimativa automática</strong> com base nas informações fornecidas.<br />
                        O <strong>preço final será definido pelo tatuador</strong>, após avaliação do local, estilo e complexidade da tatuagem.
                    </p>
                </span>
            </Form>
        </>
    );
}