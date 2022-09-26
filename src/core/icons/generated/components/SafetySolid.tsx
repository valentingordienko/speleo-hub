import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SafetySolid.svg';

export function SafetySolid(props: TProps) {
  return (
    <Icon {...props} name="SafetySolid">
      <SVG />
    </Icon>
  );
}
