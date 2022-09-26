import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BrokerOutline.svg';

export function BrokerOutline(props: TProps) {
  return (
    <Icon {...props} name="BrokerOutline">
      <SVG />
    </Icon>
  );
}
