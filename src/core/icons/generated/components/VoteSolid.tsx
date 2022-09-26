import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VoteSolid.svg';

export function VoteSolid(props: TProps) {
  return (
    <Icon {...props} name="VoteSolid">
      <SVG />
    </Icon>
  );
}
