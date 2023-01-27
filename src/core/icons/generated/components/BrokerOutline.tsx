import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BrokerOutline.svg';

export function BrokerOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BrokerOutline">
      <SVG />
    </Icon>
  );
}
