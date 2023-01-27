import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StudySolid.svg';

export function StudySolid(props: TBaseProps) {
  return (
    <Icon {...props} name="StudySolid">
      <SVG />
    </Icon>
  );
}
