import React, { Component } from 'react'
import classNames from 'classnames'

export default class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
              {
                id: 0,
                meta: 'Сказочное заморское яство',
                metaHover: 'Котэ не одобряет?',
                name: 'Нямушка',
                additionalName: 'с фуа-гра',
                description: "<b>10</b> порций<br/> мышь в подарок",
                weight:'0,5',
                isSelected: false,
                isDisabled: false,
                textDefault: 'Чего сидишь? Порадуй котэ,',
                textSelected: 'Печень утки разварная с артишоками.',
                textDisabled: 'Печалька, с курой закончился.',
              },
              {
                id: 1,
                meta: 'Сказочное заморское яство',
                metaHover: 'Котэ не одобряет?',
                name: 'Нямушка',
                additionalName: 'с рыбой',
                description: "<b>40</b> порций<br/><b>2</b> мыши в подарок",
                weight:'2',
                isSelected: false,
                isDisabled: false,
                textDefault: 'Чего сидишь? Порадуй котэ,',
                textSelected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                textDisabled: 'Печалька, с рыбой закончился.',
              },
              {
                id: 2,
                meta: 'Сказочное заморское яство',
                metaHover: 'Котэ не одобряет?',
                name: 'Нямушка',
                additionalName: 'с курицей',
                description: "<b>100</b> порций<br/><b>5</b> мышей в подарок<br/>заказчик доволен",
                weight:'5',
                isSelected: false,
                isDisabled: true,
                textDefault: 'Чего сидишь? Порадуй котэ,',
                textSelected: 'Филе из цыплят с трюфелями в бульоне.',
                textDisabled: 'Печалька, с курой закончился.',
              },
            ]
        };
    }

    getInitailState() {
        return {
            products: []
        }
    }

    toggleCat(id) {
        this.setState((state) => {
            return {
                ...state,
                products: state.products.map(product => product.id === id && !product.isDisabled ?
                    { ...product, isSelected: !product.isSelected } :
                    product    
                )
            }
        })
    }

    renderText(product) {
        if (product.isDisabled) {
            return product.textDisabled
        } else if (product.isSelected){
            return product.textSelected
        } else {
            return product.textDefault + ` <a href="javascript:void(0)" onClick="{() => this.toggleCat(product.id)}">купи</a>`
        }
    }

    render() {

        return (
            <div className="item">
                <div className="products">
                    {this.state.products.map((product, key) => {
                        let productClasses = classNames({
                            'products-item': true,
                            'products-item--disabled': product.isDisabled,
                            'products-item--selected': product.isSelected
                        });
                    return (
                        <div className={productClasses} key={key} onClick={() => this.toggleCat(product.id)}>
                            <div className="products-item__block">
                                <div className="products-item__count"><span>{product.weight}</span>кг</div>
                                <div className="products-item__block-inner">
                                    <span className="products-item__meta">{product.meta}</span>
                                    <h3 className="products-item__name">{product.name}</h3>
                                    <span className="products-item__additional-name">{product.additionalName}</span>
                                    <p className="products-item__description" dangerouslySetInnerHTML={{__html: product.description}}></p>
                                    <img src="/images/cat.png" alt="cat" className="products-item__image"/>
                                </div>
                            </div> 
                            <div className="products-item__bottom-text">
                                <span dangerouslySetInnerHTML={{__html: this.renderText(product)}}></span>
                            </div>
                        </div>
                    )}
                    )}
                </div>
            </div>
        )
    }

}