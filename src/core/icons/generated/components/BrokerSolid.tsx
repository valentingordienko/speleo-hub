import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BrokerSolid.svg';

export function BrokerSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="BrokerSolid">
      <SVG />
    </Icon>
  );
}
