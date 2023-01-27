import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GroupOfPersonsSolid.svg';

export function GroupOfPersonsSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="GroupOfPersonsSolid">
      <SVG />
    </Icon>
  );
}
