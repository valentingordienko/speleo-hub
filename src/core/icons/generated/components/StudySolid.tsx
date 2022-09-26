import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StudySolid.svg';

export function StudySolid(props: TProps) {
  return (
    <Icon {...props} name="StudySolid">
      <SVG />
    </Icon>
  );
}
