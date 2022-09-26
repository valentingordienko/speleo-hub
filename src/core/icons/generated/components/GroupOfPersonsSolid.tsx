import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GroupOfPersonsSolid.svg';

export function GroupOfPersonsSolid(props: TProps) {
  return (
    <Icon {...props} name="GroupOfPersonsSolid">
      <SVG />
    </Icon>
  );
}
