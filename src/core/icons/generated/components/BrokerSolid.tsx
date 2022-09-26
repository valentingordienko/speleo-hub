import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BrokerSolid.svg';

export function BrokerSolid(props: TProps) {
  return (
    <Icon {...props} name="BrokerSolid">
      <SVG />
    </Icon>
  );
}
