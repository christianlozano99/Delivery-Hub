import React, {Component} from 'react'

import './Packages.css';


export default class Packages extends Component {

    loadCards(packages_data) {
        var div = [];

        for (var i = 0; i < packages_data.length; i++) {
            div[i] = this.createCard(packages_data[i]);
        }

        return(div);
    }

    createCard(card_info) {
        var card = (
            <div class="card">
                <div class="container">
                    <h2>
                        <b>{
                            card_info.packageItem
                        }</b>
                    </h2>
                    <p>Status: {
                        card_info.currentStatus
                    }</p>
                    <p>Expected: {
                        card_info.expected
                    }</p>
                    <p class="location">Location: {
                        card_info.location
                    }</p>
                </div>
            </div>
        )

        return card;
    }


    render() { // to be replaced with api call to SQL results
        const packages_data = [
            {
                id: 1,
                packageItem: 'Iphone Protector',
                currentStatus: 'Out for delivery',
                expected: '12/25/2022',
                location: "FORT WORTH TX DISTRIBUTION CENTER"

            }, {
                id: 2,
                packageItem: 'Air Freshener',
                currentStatus: 'Delivered',
                expected: '12/01/2022',
                location: "Miami FL DISTRIBUTION CENTER"
            }, {
                id: 3,
                packageItem: 'Keurig',
                currentStatus: 'Shipped',
                expected: '11/30/2022',
                location: "Orlando FL DISTRIBUTION CENTER"
            }
        ];

        return (
            <div class="packages">
                {
                this.loadCards(packages_data)
            } </div>
        )
    }


}
