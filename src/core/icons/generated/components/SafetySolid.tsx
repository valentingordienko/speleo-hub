import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SafetySolid.svg';

export function SafetySolid(props: TBaseProps) {
  return (
    <Icon {...props} name="SafetySolid">
      <SVG />
    </Icon>
  );
}
