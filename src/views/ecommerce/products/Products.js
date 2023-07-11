import { CCol, CRow } from '@coreui/react'
import React from 'react'
import { styled } from 'styled-components'

const Products = () => {
  return (
    <>
      <Productscompo>
        <CRow>
          <CCol lg={4} xl={3}>
            <div className="filter-card bg-white">
              <div className="filter-heading border-bottom ">
                <h5 className="mb-0 ">Filters</h5>
              </div>
              <div className="p-4">
                <h5 className="fs-14">Categories</h5>
              </div>
            </div>
          </CCol>
          <CCol lg={8} xl={9}></CCol>
        </CRow>
      </Productscompo>
    </>
  )
}

const Productscompo = styled.div`
  .filter-heading {
    padding: 0.625rem 1.25rem;
  }
  .fs-14 {
    font-size: 14px;
  }
`

export default Products
