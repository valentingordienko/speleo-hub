import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeliverySolid.svg';

export function DeliverySolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DeliverySolid">
      <SVG />
    </Icon>
  );
}
