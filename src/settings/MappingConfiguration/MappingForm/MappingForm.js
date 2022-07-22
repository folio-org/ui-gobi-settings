import { Accordion, AccordionSet, Col, Row } from '@folio/stripes/components';
import stripesForm from '@folio/stripes/final-form';

import { MappingFieldEdit } from '../../components/MappingFieldEdit';
import {
  ORDER_MAPPING_ACCORDIONS,
  ORDER_MAPPING_ACCORDIONS_TITLES,
} from '../../constants';

const MappingForm = ({
  accordionStatus,
  toggleSection,
  form,
}) => {
  console.log('form', form);

  return (
    <form>
      <>
        <AccordionSet
          accordionStatus={accordionStatus}
          onToggle={toggleSection}
        >
          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.poInfo]}
            id={ORDER_MAPPING_ACCORDIONS.poInfo}
          >
            <Row>
              <Col xs>
                1
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.ongoingOrder]}
            id={ORDER_MAPPING_ACCORDIONS.ongoingOrder}
          >
            <Row>
              <Col xs={3}>
                2
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.poNotes]}
            id={ORDER_MAPPING_ACCORDIONS.poNotes}
          >
            <Row>
              <Col xs={3}>
                3
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.poTags]}
            id={ORDER_MAPPING_ACCORDIONS.poTags}
          >
            <Row>
              <Col xs={3}>
                3
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.poSummary]}
            id={ORDER_MAPPING_ACCORDIONS.poSummary}
          >
            <Row>
              <Col xs={3}>
                4
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.itemDetails]}
            id={ORDER_MAPPING_ACCORDIONS.itemDetails}
          >
            <Row>
              <Col xs={3}>
                5
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.lineDetails]}
            id={ORDER_MAPPING_ACCORDIONS.lineDetails}
          >
            <Row>
              <Col xs={3}>
                6
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.vendor]}
            id={ORDER_MAPPING_ACCORDIONS.vendor}
          >
            <Row>
              <Col xs={3}>
                7
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.costDetails]}
            id={ORDER_MAPPING_ACCORDIONS.costDetails}
          >
            <Row>
              <Col xs={3}>
                8
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.fundDistribution]}
            id={ORDER_MAPPING_ACCORDIONS.fundDistribution}
          >
            <Row>
              <Col xs={3}>
                9
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.location]}
            id={ORDER_MAPPING_ACCORDIONS.location}
          >
            <Row>
              <Col xs={3}>
                10
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.physical]}
            id={ORDER_MAPPING_ACCORDIONS.physical}
          >
            <Row>
              <Col xs={3}>
                11
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.eresources]}
            id={ORDER_MAPPING_ACCORDIONS.eresources}
          >
            <Row>
              <Col xs={3}>
                12
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.other]}
            id={ORDER_MAPPING_ACCORDIONS.other}
          >
            <Row>
              <Col xs={3}>
                13
              </Col>
            </Row>
          </Accordion>

          <Accordion
            label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.polTags]}
            id={ORDER_MAPPING_ACCORDIONS.polTags}
          >
            <Row>
              <Col xs={3}>
                14
              </Col>
            </Row>
          </Accordion>
        </AccordionSet>
      </>
    </form>
  );
};

export default stripesForm({
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  navigationCheck: true,
  subscription: { values: true },
})(MappingForm);
