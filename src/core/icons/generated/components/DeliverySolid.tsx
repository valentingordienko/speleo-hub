import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeliverySolid.svg';

export function DeliverySolid(props: TProps) {
  return (
    <Icon {...props} name="DeliverySolid">
      <SVG />
    </Icon>
  );
}
