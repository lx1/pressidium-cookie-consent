import { useMemo } from '@wordpress/element';
import {
  Flex,
  FlexItem,
} from '@wordpress/components';

import styled from 'styled-components';

const StyledLabel = styled.span`
    font-size: 11px;
    font-weight: 500;
    line-height: 1.4;
    text-transform: uppercase;
    display: block;
    margin-bottom: 8px;
    padding: 0;
`;

const StyledHelp = styled.p`
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 12px;
  font-style: normal;
  color: #757575;
`;

function Badge(props) {
  const {
    value,
    status = 'info',
    style = {},
    label = null,
    help = null,
  } = props;

  const statusClass = useMemo(() => {
    switch (status) {
      case 'success':
        return 'pressidium-badge--success';
      case 'error':
        return 'pressidium-badge--error';
      case 'warning':
        return 'pressidium-badge--warning';
      case 'info':
        return 'pressidium-badge--info';
      default:
        return 'pressidium-badge--default';
    }
  }, [status]);

  return (
    <Flex direction="column" gap={0} style={{ maxWidth: '320px' }}>
      {label !== null ? (
        <FlexItem>
          <StyledLabel>
            {label}
          </StyledLabel>
        </FlexItem>
      ) : null}
      <FlexItem>
        <mark
          className={`pressidium-badge ${statusClass}`}
          style={{ ...style }}
        >
          <span>
            {value}
          </span>
        </mark>
      </FlexItem>
      {help !== null ? (
        <FlexItem>
          <StyledHelp>
            {help}
          </StyledHelp>
        </FlexItem>
      ) : null}
    </Flex>
  );
}

export default Badge;
