import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Price } from '@vtex/product-details'
import './global.css'

/**
 * Minicart item component
 */
export default class MiniCartItem extends Component {
  render() {
    const { imageUrl, name, skuName, sellingPrice, listPrice } = this.props
    return (
      <div className="minicart-item flex flex-row relative bb b--silver mb3">
        <img className="image-size" src={imageUrl} />
        <div className="ml3">
          <div className="name-size mt3">
            <span className="b">{name}</span>
          </div>
          <div>
            <div className="sku-size">
              <span className="f7 dark-gray">{skuName}</span>
            </div>
            <div className="absolute right-0 bottom-0 mb3">
              <Price
                sellingPrice={sellingPrice}
                listPrice={listPrice}
                showLabels={false}
                showListPrice={false} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MiniCartItem.propTypes = {
  /* Item's image */
  imageUrl: PropTypes.string.isRequired,
  /* Item's name */
  name: PropTypes.string.isRequired,
  /* Item's selling price */
  sellingPrice: PropTypes.number.isRequired,
  /* Item's list price */
  listPrice: PropTypes.number.isRequired,
  /* Item's sku */
  skuName: PropTypes.string.isRequired,
}

