import React, { Component } from "react";
import classnames from "classnames";
import "./styles.css";


const EklenecekMalzemeler = (props) => {
    const {secilenMalzemeler, Malzemeler, malzemeEkle, malzemeCikar, Toplam, topla} = props;
    return (
        <div>
            <h2>Eklenecek Malzemeler</h2>
                {
                        Malzemeler.map((malzeme) => {
                        // mazeleme seculi ise azalt butonu aktif, degilse disabled
                        const azaltButonunuGoster = secilenMalzemeler.find((secilenMalzeme) => secilenMalzeme.id === malzeme.id)
                        return <table key={malzeme.id}>
                            <tr>
                            <td>{malzeme.name}</td>

                            <td><button onClick={() => {
                                malzemeEkle(malzeme)
                            }} className="malzeme-ekle">Ekle</button></td>

                            <td><button onClick={() => {
                                malzemeCikar(malzeme)

                            }}
                                className={classnames({
                                    "malzeme-cikar": true,
                                    "disabled": !azaltButonunuGoster,
                                    "enabled": azaltButonunuGoster
                                })}>Azalt</button></td>

                            <td>{malzeme.price} TL</td>
                            </tr>
                        </table>
                    })
                }
                
                <table>
                    <tr>
                        <td>
                        <button onClick={() => {
                            topla(Toplam)
                        }} className="hesapla">Toplam</button></td>
                        <th>Toplam Tutar: {Toplam}</th>   
                    </tr>
                </table>
        </div>
    )   
};

export default EklenecekMalzemeler;